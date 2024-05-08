import { uploadPhoto, createUser } from './utils';

export default async function asyncUploader() {
  try {
    const photoUploaded = await uploadPhoto();
    const userCreated = await createUser();
    return ({
      photo: photoUploaded,
      user: userCreated,
    });
  } catch (error) {
    return ({
      photo: null,
      user: null,
    });
  }
}
