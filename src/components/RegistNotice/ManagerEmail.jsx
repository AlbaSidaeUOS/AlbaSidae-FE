import S from "../../uis/RegistUI";

const ManagerEmail = ({ value, onChange }) => {
  return (
    <S.NoticeInput
      type="email"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="이메일을 입력해주세요."
    />
  );
};

export default ManagerEmail;
