// const KakaoStrategy = require("passport-kakao").Strategy;
// import User from "../../models/user-model";
// import passport from "passport";
// import { kakao } from "../../config/constants";
// import { UserParams } from "../../common/type";

// const KakaoModule = (app: any) => {
//   app.use(passport.initialize());

//   passport.use(
//     new KakaoStrategy(
//       {
//         clientID: kakao.kakaoId,
//         callbackURL: kakao.kakaoUrl,
//       },
//       async (
//         accessToken: string,
//         refreshToken: string,
//         profile: any,
//         done: any
//       ) => {
//         try {
//           const existUser: UserParams | null = await User.findOne({
//             email: profile._json.kakao_account.email,
//           });

//           if (existUser) {
//             done(null, existUser);
//           }

//           const newUser: UserParams = await User.create({
//             email: profile._json.kakao_account.email,
//             nickname: profile._json.properties.nickname,
//             profileImg: profile._json.properties.profile_image,
//           });

//           done(null, newUser);
//         } catch (error) {
//           console.error(error);
//           done(error);
//         }
//       }
//     )
//   );
// };

// export default KakaoModule;