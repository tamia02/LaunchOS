import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export const getGeminiModel = (model = 'gemini-3.6-flash') => {
    return genAI.getGenerativeModel({ model })
}
