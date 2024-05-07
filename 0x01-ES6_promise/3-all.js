import { uploadPhoto, createUser } from './utils';

const photo = uploadPhoto();
const userCreated = createUser();

export default function handleProfileSignup() {
  return Promise.all([photo, userCreated])
    .then((result) => console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`))
    .catch(() => console.log('Signup system offline'));
}
