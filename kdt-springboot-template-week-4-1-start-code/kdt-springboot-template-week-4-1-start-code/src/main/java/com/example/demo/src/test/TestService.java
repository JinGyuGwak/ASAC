package com.example.demo.src.test;


import com.example.demo.common.BaseException;
import com.example.demo.src.user.model.PostUserReq;
import com.example.demo.src.user.model.PostUserRes;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import static com.example.demo.common.BaseResponseStatus.DATABASE_ERROR;
import static com.example.demo.common.BaseResponseStatus.POST_USERS_EXISTS_EMAIL;

@RequiredArgsConstructor
@Service
public class TestService {
    //POST  밑에 메모에 맞게 바꿔라
//    public void createUser(MemoDto memoDto) throws BaseException {
//        //중복
//        if(checkEmail(postUserReq.getEmail()) ==1){
//            throw new BaseException(POST_USERS_EXISTS_EMAIL);
//        }
//        try{
//            int userId = userDao.createUser(memoDto); // POINT
//            return new PostUserRes(userId);
//        } catch (Exception exception) {
//            throw new BaseException(DATABASE_ERROR);
//        }
//    }
}
