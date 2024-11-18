import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import MOCK_RESUME from "../mock/mock-resume";
import Header from "../components/Header";
import S from "../uis/ResumeUI";

const ResumeDetail = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    /*For debugging*/
    const resume = MOCK_RESUME.find((item) => item.id === parseInt(id));

    return (
        <>
            <Header/>
            <S.PageFrame>
                <S.InfoContainerColumn>
                    <S.ResumeDetailHeader>최종수정일:{resume.lastUpdate}</S.ResumeDetailHeader>
                    <S.ResumeDetailTitle>{resume.resumeTitle}</S.ResumeDetailTitle>
                    <S.ResumeDetailProfile>
                        <S.ResumeDetailProfileImage>
                            <img src={resume.image} alt={"프로필 이미지"}/>
                        </S.ResumeDetailProfileImage>
                        <S.InfoContainerColumn>
                            <S.InfoRow>
                                <S.Content>{
                                    resume.user.name + " " +
                                    resume.user.gender + " " +
                                    resume.user.age + "세"
                                }
                                </S.Content>
                            </S.InfoRow>
                            <S.InfoRow>
                                <S.Label>{"연락처"}</S.Label>
                                <S.Content>{resume.user.phone}</S.Content>
                            </S.InfoRow>
                            <S.InfoRow>
                                <S.Label>{"이메일"}</S.Label>
                                <S.Content>{resume.user.email}</S.Content>
                            </S.InfoRow>
                            <S.InfoRow>
                                <S.Label>{"주소"}</S.Label>
                                <S.Content>{
                                    resume.address.city + " " +
                                    resume.address.district + " " +
                                    resume.address.street + " " +
                                    resume.address.num
                                }
                                </S.Content>
                            </S.InfoRow>
                            <S.InfoRow>
                                <S.Label>{"홈페이지"}</S.Label>
                                <S.Content>{resume.user.homepage}</S.Content>
                            </S.InfoRow>
                        </S.InfoContainerColumn>
                    </S.ResumeDetailProfile>
                    <S.ResumeDetailTitle>{"학력"}</S.ResumeDetailTitle>
                    <S.InfoContainerColumn>
                        <S.InfoRow>{resume.educationLevel}</S.InfoRow>
                    </S.InfoContainerColumn>
                    <S.ResumeDetailTitle>{"경력"}</S.ResumeDetailTitle>
                    <S.InfoContainerColumn>
                        <S.InfoRow>{resume.employmentTypes + " " + resume.career}</S.InfoRow>
                    </S.InfoContainerColumn>
                    <S.ResumeDetailTitle>{"희망근무 조건"}</S.ResumeDetailTitle>
                    <S.InfoContainerColumn>
                        <S.InfoRow>
                            <S.Label>{"근무기간"}</S.Label>
                            <S.Content>{resume.workPeriod}</S.Content>
                        </S.InfoRow>
                        <S.InfoRow>
                            <S.Label>{"근무요일"}</S.Label>
                            <S.Content>{resume.workDays}</S.Content>
                        </S.InfoRow>
                        <S.InfoRow>
                            <S.Label>{"근무형태"}</S.Label>
                            <S.Content>{resume.employmentTypes}</S.Content>
                        </S.InfoRow>
                        <S.InfoRow>
                            <S.Label>{"희망근무지"}</S.Label>
                            <S.Content>{resume.preferredWorkLocation}</S.Content>
                        </S.InfoRow>
                        <S.InfoRow>
                            <S.Label>{"희망업직종"}</S.Label>
                            <S.Content>{resume.preferredJobTypes}</S.Content>
                        </S.InfoRow>
                    </S.InfoContainerColumn>
                    <S.ResumeDetailTitle>{"자기소개서"}</S.ResumeDetailTitle>
                    <S.InfoContainerColumn>
                        <S.InfoRow>{"자기소개서"}</S.InfoRow>
                    </S.InfoContainerColumn>
                </S.InfoContainerColumn>
            </S.PageFrame>
        </>
    );
}

export default ResumeDetail;
