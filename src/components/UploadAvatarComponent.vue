<template>
  <Transition name="modal">
    <div v-if="props.show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">Profil Resmi Yükle</slot>
        </div>

        <div class="modal-body">
          <input type="file" @change="onFileChange" class="hidden" ref="fileInput" />
          <button
            class="bg-[#42b983] text-white rounded px-4 py-2"
            @click="($refs['fileInput'] as any).click()"
          >
            Dosya Seç
          </button>
          <div v-if="preview">
            <h3>Preview:</h3>
            <img :src="preview" alt="Preview" class="w-full" />
          </div>
        </div>

        <div class="flex flex-row justify-between">
          <button class="bg-red-500 rounded text-white px-4 py-2" @click="$emit('close')">
            Vazgeç
          </button>
          <button @click="uploadFile" class="bg-[#42b983] text-white rounded px-4 py-2">
            Yükle
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useToast } from '@/composables/useToast';
import api from '@/plugins/axios';
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const file = ref<File | null>(null);
const preview = ref<string | null>(null);
const showToast = useToast();
const auth = useAuthStore();
const emit = defineEmits(['click', 'close']);
const props = defineProps({
  show: Boolean,
});

function onFileChange(e: Event) {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    file.value = target.files[0];
    preview.value = URL.createObjectURL(file.value);
  }
}

async function uploadFile() {
  if (!file.value) return;

  const formData = new FormData();
  formData.append('file', file.value);

  try {
    const res = await api.post('/users/upload-avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Upload successful:', res.data);
    auth.fetchUser(); // Kullanıcı bilgilerini güncelle
    showToast('Profile picture uploaded successfully', 'success');
    preview.value = null;
    emit('close');
  } catch (error) {
    console.error('Upload failed:', error);
    showToast('Failed to upload profile picture', 'error');
    preview.value = null;
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 600px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
