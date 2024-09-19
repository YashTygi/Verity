import { create } from 'zustand'

const useStore = create((set) => ({
  language: 'English',
  answerPriority: 'RAG Based',
  setLanguage: (language) => set({ language }),
  setAnswerPriority: (answerPriority) => set({ answerPriority }),
}))

export default useStore