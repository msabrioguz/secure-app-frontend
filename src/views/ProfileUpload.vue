<template>
  <div>
    <h2>Upload Profile Picture</h2>
    <input type="file" @change="onFileChange" />
    <button @click="uploadFile">Upload</button>
    <div v-if="preview">
      <h3>Preview:</h3>
      <img :src="preview" alt="Preview" width="150" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '@/composables/useToast';
import api from '@/plugins/axios';
import { ref } from 'vue';


const file = ref<File | null>(null);
const preview = ref<string | null>(null);
const showToast = useToast();

function onFileChange(e: Event) {
  const target = e.target as HTMLInputElement;
  if(target.files && target.files[0]){
    file.value = target.files[0];
    preview.value = URL.createObjectURL(file.value);
  }
}

async function uploadFile() {
  if(!file.value) return;

  const formData = new FormData();
  formData.append('file', file.value);

  try {
    const res = await api.post('/users/upload-avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });

    console.log('Upload successful:', res.data);
    showToast('Profile picture uploaded successfully', 'success');
  } catch (error) {
    console.error('Upload failed:', error);
    showToast('Failed to upload profile picture', 'error');
  }
}
</script>

<style scoped>

</style>
