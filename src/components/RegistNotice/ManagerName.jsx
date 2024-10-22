import S from "../../uis/RegistUI";

const ManagerName = ({ value, onChange }) => {
  return (
    <S.NoticeInput
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="이름을 입력해주세요."
    />
  );
};

export default ManagerName;
