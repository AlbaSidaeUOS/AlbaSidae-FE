import S from "../../uis/RegistUI";

const NoticeCompanyContent = ({ value, onChange }) => {
  return (
    <S.NoticeInput
      type="text"
      name="companyContent"
      value={value}
      placeholder="회사의 주요 사업내용을 입력해주세요."
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default NoticeCompanyContent;
