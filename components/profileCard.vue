<script setup>
const userStore = useUserStore();

const { getUser, fetchUser } = userStore;

fetchUser()

const user = getUser;


const edit = ref(false);
</script>


<template>
    <div class="profileCard ">
        <div class=" wrapper flex justify-center items-center h-screen bg-gray-100">
      <Card class="w-96 p-4 bg-white shadow-md rounded-lg">
        <!-- Imagen del Avatar -->
        <template #content>
            <div class="info" v-show="!edit">
                <div class="flex justify-center mb-4">
                    <img
                        :src="user.avatar"
                        alt="User Avatar"
                        class="w-24 h-24 rounded-full border-4 border-emerald-500"
                    />
                    </div>
            
                    <h2 class="text-2xl font-bold text-center text-gray-800 mb-2">{{ user.username }}</h2>
            
                    <p class="text-center text-gray-600 mb-4">
                    <i class="pi pi-envelope mr-2"></i>{{ user.email }}
                    </p>
            
                    <p class="text-gray-700 text-center mb-4">
                    {{ user.description }}
                    </p>
  
            </div>
            <div class="edit my-4 flex flex-col gap-3 justify-center" v-show="edit">
                <div class="flex flex-col gap-1">
                    <label for="username">Username</label>
                    <IconField iconPosition="left">
                        <InputIcon class="pi pi-user"> </InputIcon>
                        <InputText v-model="user.username" placeholder="usuario" />
                    </IconField>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="email">Email</label>
                    <IconField iconPosition="left">
                        <InputIcon class="pi pi-user"> </InputIcon>
                        <InputText v-model="user.email" placeholder="usuario" />
                    </IconField>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="description">Description</label>
                    <Textarea v-model="user.description" rows="5" cols="30" />
                </div>
                <FileUpload name="demo[]" url="/api/upload"  accept="image/*" :maxFileSize="1000000">
                    <template #empty>
                        <p>Subir una imagen menor a 2mb.</p>
                    </template>
                </FileUpload>

            </div>
        <div class="flex justify-center">
          <Button label="Edit Profile" icon="pi pi-pencil" class="p-button-rounded p-button-outlined" @click="edit = !edit" />
        </div>
        </template>
      </Card>
    </div>
    </div>
  </template>
  
<style>

.wrapper {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(157, 255, 202, 1) 73%,
    rgba(138, 255, 155, 1) 100%
  );
  background-size: 300% 300%; /* Esto permitirá que el gradiente se mueva */
  animation: gradientAnimation 5s ease infinite; /* Añadimos la animación */
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