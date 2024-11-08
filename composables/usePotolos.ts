export const usePotolos = async  () => {
    const potolos = await $fetch('/api/potolo')
    return potolos;
}