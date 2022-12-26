package com.example.demo.src.test;

import com.example.demo.common.BaseException;
import com.example.demo.common.BaseResponse;
import com.example.demo.src.user.UserService;
import com.example.demo.src.user.model.PostUserReq;
import com.example.demo.src.user.model.PostUserRes;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import static com.example.demo.common.BaseResponseStatus.POST_USERS_EMPTY_EMAIL;
import static com.example.demo.common.BaseResponseStatus.POST_USERS_INVALID_EMAIL;
import static com.example.demo.utils.ValidationRegex.isRegexEmail;

@RequiredArgsConstructor
@RestController
@RequestMapping("/test")
public class TestController {

//    /**
//     * 메모생성 API
//     * [POST] /test/memos
//     * @return BaseResponse<PostUserRes>
//     */
//    private final TestService testService;
//    // Body
//    @ResponseBody
//    @PostMapping("")
//    public BaseResponse<PostUserRes> createUser(@RequestBody PostUserReq postUserReq) {
//        // TODO: email 관련한 짧은 validation 예시입니다. 그 외 더 부가적으로 추가해주세요!
//        if(postUserReq.getEmail() == null){
//            return new BaseResponse<>(POST_USERS_EMPTY_EMAIL);
//        }
//        //이메일 정규표현
//        if(!isRegexEmail(postUserReq.getEmail())){
//            return new BaseResponse<>(POST_USERS_INVALID_EMAIL);
//        }
//        try{
//            PostUserRes postUserRes = testService.createMemo(memoDto);
//            return new BaseResponse<>(postUserRes);
//        } catch(BaseException exception){
//            return new BaseResponse<>((exception.getStatus()));
//        }
//    }



    /**
     * 로그 테스트 API
     * [GET] /test/log
     * @return String
     */
    @ResponseBody
    @GetMapping("/log")
    public String getAll() {
        System.out.println("테스트");
        return "Success Test";
    }
}
