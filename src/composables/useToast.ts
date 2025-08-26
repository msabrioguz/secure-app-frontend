import { h, render } from 'vue';
import Toast from '@/components/ToastComponent.vue';

export function useToast() {
  return (message: string, type: 'success' | 'error' = 'success') => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const vnode = h(Toast, { message, type });
    render(vnode, container);

    setTimeout(() => {
      render(null, container);
      document.body.removeChild(container);
    }, 3500);
  };
}
