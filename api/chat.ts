import type { VercelRequest, VercelResponse } from "@vercel/node";

const PROFILE_CONTEXT = `You are the AI Portfolio Assistant for Rohit Mandwade. Answer questions about his background concisely and in a friendly tone. Use emojis occasionally. Keep answers under 3 sentences.

Profile: Rohit Mandwade, AI Engineer at IRDPL Pune. B.E. Computer Engineering, SPPU (7.95 CGPA).
Contact: rohitm7298@gmail.com | +91 9322168290 | GitHub: Rohit11-OG | LinkedIn: rohit-mandwade-805979319
Skills: Python, PyTorch, TensorFlow, OpenCV, YOLO, Flask, SQL, AWS, Oracle Cloud, Git, Linux, Pandas, NumPy, Scikit-learn, Power BI, Hugging Face, ROS2, Intel RealSense
Certifications: Oracle Data Science Pro, Oracle Gen AI Pro, Gen AI Foundations (UpGrad), JP Morgan Quant Research, Elements of AI (Helsinki)
Experience: AI Engineer at IRDPL (Jan 2026-Present) building CV models for robotics; IAF 11 BRD Intern (Dec 2024-Jan 2025) managing aircraft data; Altair DS Intern (Jul-Sep 2025) Outstanding grade.
Projects: Robot Monitoring (YOLO11, 95% acc, 30+ FPS); CivicMate AI Civic Assistant (Flask+Llama Vision); STL-Based YOLOv8 Detection (97.7% mAP50, ROS2); Vidgo.AI (video gen+voice); Driver Drowsiness Detection (OpenCV+Dlib).
If asked about hiring/resume, mention he is open to opportunities and provide his email.`;

const NVIDIA_API_URL = process.env.OPENAI_BASE_URL || "https://integrate.api.nvidia.com/v1";
const NVIDIA_API_KEY = process.env.NVIDIA_API_KEY || "";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body || {};
    const recentMessages = (messages || []).slice(-6);

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");

    const apiResponse = await fetch(`${NVIDIA_API_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "text/event-stream",
        "Authorization": `Bearer ${NVIDIA_API_KEY}`,
      },
      body: JSON.stringify({
        model: "nvidia/nemotron-3-super-120b-a12b",
        messages: [
          { role: "system", content: PROFILE_CONTEXT },
          ...recentMessages,
        ],
        temperature: 0.7,
        top_p: 0.9,
        max_tokens: 512,
        stream: true,
      }),
    });

    if (!apiResponse.ok || !apiResponse.body) {
      const errorText = await apiResponse.text();
      console.error("NVIDIA API error:", apiResponse.status, errorText);
      res.write(`data: ${JSON.stringify({ error: "AI service unavailable" })}\n\n`);
      res.write("data: [DONE]\n\n");
      return res.end();
    }

    const reader = (apiResponse.body as any).getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith("data: ")) continue;
        const data = trimmed.slice(6);
        if (data === "[DONE]") {
          res.write("data: [DONE]\n\n");
          continue;
        }
        try {
          const parsed = JSON.parse(data);
          const content = parsed?.choices?.[0]?.delta?.content;
          if (content) {
            res.write(`data: ${JSON.stringify({ content })}\n\n`);
          }
        } catch {}
      }
    }

    if (buffer.trim()) {
      const trimmed = buffer.trim();
      if (trimmed.startsWith("data: ") && trimmed.slice(6) !== "[DONE]") {
        try {
          const parsed = JSON.parse(trimmed.slice(6));
          const content = parsed?.choices?.[0]?.delta?.content;
          if (content) {
            res.write(`data: ${JSON.stringify({ content })}\n\n`);
          }
        } catch {}
      }
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error: any) {
    console.error("Error with AI provider:", error);
    try {
      res.write(`data: ${JSON.stringify({ error: "Connection failed" })}\n\n`);
      res.write("data: [DONE]\n\n");
      res.end();
    } catch {}
  }
}

export const config = {
  maxDuration: 60,
};
