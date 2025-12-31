
import { GoogleGenAI, Type } from "@google/genai";
import { Product } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getShoppingAdvice(query: string, products: Product[]) {
    const productsContext = products.map(p => 
      `${p.name} (${p.category}): ${p.description} - $${p.price}`
    ).join('\n');

    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I am a customer at Amber & Aura, an orange-themed boutique. 
        Here is our current inventory:
        ${productsContext}

        Customer Query: ${query}
        
        Please provide helpful, friendly advice and recommend specific products from the list above.`,
        config: {
          systemInstruction: "You are an expert personal shopper for Amber & Aura, a boutique that specializes in orange-themed products. Be warm, enthusiastic about the color orange, and always suggest products from the provided inventory.",
          temperature: 0.7,
        },
      });

      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm sorry, I'm having a little trouble connecting to my fashion database right now. How else can I help you find something orange today?";
    }
  }
}

export const geminiService = new GeminiService();
