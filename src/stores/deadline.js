import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import dayjs from 'dayjs'

export const useDeadlineStore = defineStore('deadline', () => {
  const deadline = ref(dayjs('2023-11-24 00:00:00'))
  return { deadline }
})