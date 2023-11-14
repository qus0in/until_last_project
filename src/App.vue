<script setup>
import { CContainer } from '@coreui/vue';
import { useDeadlineStore } from './stores/deadline';
import { ref, computed, onMounted } from 'vue';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const store = useDeadlineStore()

const dateFormat = computed(() => {
  return (store.deadline.add(9, 'h')).format('YY-MM-DD HH:mm')
})
const countDown = ref(0)
const countDownHour = computed(() => {
  return Math.floor(dayjs(countDown.value) / 1000 / 3600)
})
const countDownTime = computed(() => {
  return dayjs(countDown.value).format('mm:ss:SSS')
})

onMounted(() => {
  // console.log('onMounted')
  countDown.value = store.deadline.diff(dayjs(), 'ms')
  setInterval(() => {
    // console.log('count down')
    countDown.value-=9
  }, 9)
})

</script>

<template>
  <CContainer class="p-5 text-center">
    <h1>
      관통프로젝트 발표까지
      <br>({{ dateFormat }})
    </h1>
    <p class="display-1">
      {{ countDownHour }}:{{ countDownTime }}
    </p>
    <div>
      <img src="handy-timer-runs-and-looks-at-the-wristwatch-1.png">
    </div>
  </CContainer>
</template>

<style scoped>
/* 키 프레임 정의 */
@keyframes randomMove {
  0%   { transform: translate(-25%, 0px); }
  25%  { transform: translate(0px, 0px); }
  50%  { transform: translate(25%, 0px); }
  75%  { transform: translate(0px, 0px); }
  100% { transform: translate(-25%, 0px); }
}

/* img 태그에 애니메이션 적용 */
img {
  animation-name: randomMove; /* 애니메이션 이름 지정 */
  animation-duration: 3s; /* 애니메이션 지속 시간 */
  animation-timing-function: linear; /* 일정한 속도 */
  animation-iteration-count: infinite; /* 무한 반복 */
}
</style>
