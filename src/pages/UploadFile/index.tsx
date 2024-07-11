import { useState, useRef } from 'react';

// --- Import statements as belore
//https://github.com/atapas/youtube/blob/main/react/28-react-image-uploader/src/assets/uploading.gif
const ImageUpload = () => {
    const [avatarURL, setAvatarURL] = useState("https://raw.githubusercontent.com/atapas/youtube/main/react/28-react-image-uploader/src/assets/upload-photo-here.png");
    const fileUploadRef = useRef<HTMLInputElement>(null);
    const handleImageUpload = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        if (fileUploadRef.current != null) {
            fileUploadRef.current.click();
        }

    }
    const uploadImageDisplay = async () => {
        try {
          setAvatarURL("https://raw.githubusercontent.com/atapas/youtube/a9970169a85b11dd3a812b6122c52c96f04c747c/react/28-react-image-uploader/src/assets/edit.svg");
          if (fileUploadRef?.current?.files != null) {
          const uploadedFile = fileUploadRef.current.files[0];
          // const cachedURL = URL.createObjectURL(uploadedFile);
          // setAvatarURL(cachedURL);
          const formData = new FormData();
          formData.append("file", uploadedFile);
    
          const response = await fetch("https://api.escuelajs.co/api/v1/files/upload", {
            method: "post",
            body: formData
          });
    
          if (response.status === 201) {
            const data = await response.json();
            setAvatarURL(data?.location);
          }}
          console.log(avatarURL)
        } catch(error) {
          console.error(error);
          setAvatarURL("https://raw.githubusercontent.com/atapas/youtube/main/react/28-react-image-uploader/src/assets/upload-photo-here.png");
        }
      }
      
    return (
        <>
            <div className="relative h-96 w-96 m-8">
                <img
                    src="https://raw.githubusercontent.com/atapas/youtube/main/react/28-react-image-uploader/src/assets/upload-photo-here.png"
                    alt="Avatar"
                    className="h-96 w-96 rounded-full" />

                <form id="form" encType='multipart/form-data'>
                    <button
                        type='submit'
                        onClick={handleImageUpload}
                        className='flex-center absolute bottom-12 right-14 h-9 w-9 rounded-full'>
                        <img
                            src="https://raw.githubusercontent.com/atapas/youtube/a9970169a85b11dd3a812b6122c52c96f04c747c/react/28-react-image-uploader/src/assets/edit.svg"
                            alt="Edit"
                            className='object-cover' />
                    </button>
                    <input
                        type="file"
                        id="file"
                        ref={fileUploadRef}
                        onChange={uploadImageDisplay}
                         />
                </form>
            </div>
        </>
    )
}

export default ImageUpload;
