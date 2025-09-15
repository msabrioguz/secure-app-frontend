import * as yup from 'yup';

export default yup.object({
  name: yup.string().required('İsim alanı zorunludur'),
  surname: yup.string().required('Soyisim alanı zorunludur'),
  email: yup
    .string()
    .email('Geçerli bir e-posta adresi girin')
    .required('E-posta alanı zorunludur'),
  password: yup
    .string()
    .min(6, 'Şifre en az 6 karakter olmalıdır')
    .required('Şifre alanı zorunludur'),
  passwordAgain: yup
    .string()
    .oneOf([yup.ref('password')], 'Şifreler eşleşmiyor')
    .required('Şifre tekrar alanı zorunludur'),
});
