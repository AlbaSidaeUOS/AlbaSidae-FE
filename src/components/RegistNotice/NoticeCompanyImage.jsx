import React, { useState, useEffect } from "react";
import S from "../../uis/RegistUI";

const NoticeCompanyImage = ({ value, onChange }) => {
  const [image, setImage] = useState(value);

  useEffect(() => {
    setImage(value);
  }, [value]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      onChange(imageUrl);
    }
  };

  return (
    <S.ImageContainer>
      <S.InputWrapper>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </S.InputWrapper>
      {image && (
        <S.ImagePreview>
          <img
            src={image}
            alt="Company"
            style={{ width: "100%", borderRadius: "5px" }}
          />
        </S.ImagePreview>
      )}
    </S.ImageContainer>
  );
};

export default NoticeCompanyImage;
