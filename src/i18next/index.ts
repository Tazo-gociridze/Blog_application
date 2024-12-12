import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    ka: {
      translation: {
        //ჰედერი
        "header-logo": "ბითბლოგი",
        "nav-home": "მთავარი",
        "nav-write": "წერა",
        "nav-about": "ჩვენს შესახებ",
        "sign-in-btn": "შესვლა",
        "log-out-btn": "გასვლა",

        //პოპულარული თეგები
        "title-popular-tags": "პოპულარული თეგები",
        "tag-blockchain": "ბლოკჩეინი",
        "tag-cryptocurrency": "კრიპტოვალუტა",
        "tag-technology": "ტექნოლოგია",
        "tag-programming": "პროგრამირება",
        "tag-ai": "ხელ. ინტელექტი",
        "tag-machine-learning": "მანქანური სწავლება",
        "tag-future": "მომავალი",

        //გამორჩეული ავტორები
        "title-featured-authors": "გამორჩეული ავტორები",
        "feature-author": "ჟანნა დოე",
        "author-description": "ლორემ იპსუმ დოლორი",

        //ბლოგი
        "blog-title": "ლორემ იპსუმ დოლორი",
        "blog-description":
          "შედეგი არ არის ყოვლისმომცველი შეცდომის გამო, რაც შეიძლება მარტივი იყოს, მაგრამ დროებითი ცდომილების გარეშე, პერსპექტიული შეცდომით? რეიცენდისი.",

        //ფორმა
        "sign-up-title": "დარეგისტრირდით BitBlogs-ზე",
        "sign-up-description": "შექმენით თქვენი ანგარიში ბლოგის დასაწყებად",
        "sign-in-title": "შედით BitBlogs-ში",
        "sign-in-description": "შეიყვანეთ თქვენი რწმუნებათა სიგელები თქვენს ანგარიშზე წვდომისთვის",
        "form-name": "სახელი",
        "form-email": "ე-მაილი",
        "form-password": "პაროლი",
        "form-repeat-password": "გაიმეორეთ პაროლი",
        "form-have-an-account": "უკვე გააქვთ აქაუნთი?",
        "form-sign-in": "შესვლა",
        "form-submit-btn": "გაგზავნა",
        "form-forgot-password": "პაროლი დაგავიწყდათ?",
        "form-sign-up": "დარეგისტრირება",
        "form-dont-have-an-account": "არ გაქვთ აქაუნთი?",

        //ფორმის ვალიდაციები
         "email-required": "ემაილი აუცილებელია",
         "email-pattern-message": "ემაილის არასწორი ფირმატი",
         "email-min-length-message": "ემაილი უნდა შეიცავდეს მინიმუმ 5 სიმბოლოს",
         "email-max-length-message": "ემაილი ვერ იქნება 100 სიმბოლოზე მეტი",

         "password-required": "პაროლი აუცილებელია",
         "password-pattern-message": "პაროლის არასწორი ფირმატი",
         "password-min-length-message": "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს",
         "password-max-length-message": "პაროლი ვერ იქნება 25 სიმბოლოზე მეტი",

         "name-required": "ემაილი აუცილებელია", 
      },
    },
    en: {
      translation: {
        //header
        "header-logo": "BitBlog",
        "nav-home": "home",
        "nav-write": "write",
        "nav-about": "about",
        "sign-in-btn": "Sign in",
        "log-out-btn": "Log out",

        //Popular tags
        "title-popular-tags": "Popular tags",
        "tag-blockchain": "Blockchain",
        "tag-cryptocurrency": "Cryptocurrency",
        "tag-technology": "Technology",
        "tag-programming": "Programming",
        "tag-ai": "AI",
        "tag-machine-learning": "Machine Learning",
        "tag-future": "Future",

        //Featured authors
        "title-featured-authors": "Featured authors",
        "feature-author": "jane Doe",
        "author-description": "lorem ipsum dolor",

        //Blog
        "blog-title": "lorem ipsum dolor",
        "blog-description":
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sunt adipisci omnis rem quia error facilis possimus esse ducimus, eos eaque at animi temporibus assumenda saepe consectetur, doloremque perspiciatis? Reiciendis.",

        //form
        "sign-up-title": "Sign Up for BitBlogs",
        "sign-up-description": "Create your account to start blogging",
        "sign-in-title": "Log in to BitBlogs",
        "sign-in-description": "Enter your credentials to access your account",
        "form-name": "Name",
        "form-email": "E-mail",
        "form-password": "Password",
        "form-repeat-password": "Repeat Password",
        "form-have-an-account": "Already have an account?",
        "form-sign-in": "Sign In",
        "form-submit-btn": "Submit",
        "form-forgot-password": "Forgot password?",
        "form-sign-up": "Sign up",
        "form-dont-have-an-account": "Don't have an account?",

        //forms validation
        "email-required": "Email is crucial",
        "email-pattern-message": "Invalid email format",
        "email-min-length-message": "Email must contain at least 5 characters",
        "email-max-length-message": "Email cannot exceed 100 characters",

        "password-required": "Password is crucial",
        "password-pattern-message": "Invalid password format",
        "password-min-length-message": "password must contain at least 8 characters",
        "password-max-length-message": "password cannot exceed 25 characters",

        "name-required": "Name is required", 
      },
    },
  },
  lng: "en",
  fallbackLng: "ka",

  interpolation: {
    escapeValue: false,
  },
});
