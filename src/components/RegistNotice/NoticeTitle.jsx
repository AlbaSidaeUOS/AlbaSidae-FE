import S from "../../uis/RegistUI";

const NoticeTitle = ({ value, onChange }) => {
  return (
    <S.NoticeInput
      type="text"
      name="title"
      value={value}
      placeholder="예) 알바천국 OO점 매장관리 매니저 모집"
      onChange={(e) => onChange(e.target.name, e.target.value)}
    />
  );
};

export default NoticeTitle;
