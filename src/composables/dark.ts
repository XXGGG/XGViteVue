// these APIs are auto-imported from @vueuse/core
export const isDark = useDark() // 当前是否处于暗黑模式
export const toggleDark = useToggle(isDark) // 切换暗黑模式
export const preferredDark = usePreferredDark() // 用户系统是否偏好暗黑模式

// export const toggleDark = useToggle(isDark)
// 等价于
// const toggleDark = () => {
//   isDark.value = !isDark.value
// }
