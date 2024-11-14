<script setup>
const sesion = ref({
  username: null,
  password: null,
});
const router = useRouter();

const loginRouter = () => {
  router.push("/");
};


</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="title">Mind & Buzz</h1>
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText placeholder="Usuario" v-model="sesion.username" />
      </InputGroup>
      <Password
        v-model="sesion.password"
        placeholder="Contraseña"
        toggle-mask
        :feedback="false"
      />
      <Button class="w-full" label="Iniciar Sesión" @click="loginRouter" />

      <NuxtLink to="/registrar" class="w-full">
        <Button class="w-full" label="Registrar" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.w-full {
  width: 100%;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Esto hace que ocupe toda la pantalla */
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(157, 255, 202, 1) 73%,
    rgba(138, 255, 155, 1) 100%
  );
  background-size: 300% 300%; /* Esto permitirá que el gradiente se mueva */
  animation: gradientAnimation 5s ease infinite; /* Añadimos la animación */
}

.container {
  width: 358px;
  background-color: #ffffff;
  -webkit-box-shadow: -5px 7px 24px -11px rgba(255, 255, 255, 1);
  -moz-box-shadow: -5px 7px 24px -11px rgba(255, 255, 255, 1);
  box-shadow: -5px 7px 24px -11px rgba(255, 255, 255, 1);
  padding: 50px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.title {
  color: black;
}

/* Animación del gradiente */
@keyframes gradientAnimation {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
</style>
