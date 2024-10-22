import S from "../../uis/RegistUI";

const NoticeCompanyName = ({ value, onChange }) => {
  return (
    <S.NoticeInput
      type="text"
      name="companyName"
      value={value}
      placeholder="회사명"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default NoticeCompanyName;
