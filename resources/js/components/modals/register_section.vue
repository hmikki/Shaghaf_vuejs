<template>
    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

        <form class="form">
            <div class="radio-chose">
                <label for="radio-one" class="r-ch1"><i class="far fa-user-circle"></i> نوع التسجيل</label>
                <div class="switch-field r-ch2">
                    <input type="radio" id="radio-one" name="switch-one" value="yes" checked/>
                    <label for="radio-one"><i class="fas fa-check-circle"></i> عميل شغف</label>
                    <input type="radio" id="radio-two" name="switch-one" value="no" />
                    <label for="radio-two"><i class="fas fa-check-circle"></i> شريك شغف</label>
                </div>
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput"><i class="fas fa-user"></i> الاسم كاملا</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="ادخال الاسم كاملا">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1"> <i class="fas fa-phone-alt"></i> رقم الجوال</label>

                <div class="row w-100 phone-n">
                    <input class="form-control mr-sm-2 search-t col-lg" type="number" placeholder="ادخال رقم الجوال" aria-label="Search">
                    <span class="flag-img">(+966) <img src="assets/img/saudi-arabia.svg" alt=""></span>
                </div> </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">المدينة</label>
                <select class="form-control minimal" id="exampleFormControlSelect1">
                    <option>المملكة العربية السعودية - المدينة المنورة </option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1"><i class="fas fa-envelope"></i> البريد الالكتروني</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ادخال البريد الالكتروني">
            </div>
            <div class="form-group">
                <label for="inputPassword"> <i class="fas fa-lock"></i> كلمة المرور</label>
                <input type="password" class="form-control" id="inputPassword" placeholder="ادخل كلمة المرور">
            </div>
            <div class="form-group">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                        أوافق على سياسة الخصوصية
                    </label>
                </div>
            </div>
            <div class="tab-button">
                <button type="submit" class="btn" data-toggle="modal" data-target="#exampleModalCenter-2"  aria-label="Close" data-dismiss="modal">إنشاء حساب</button>
            </div>
            <div class="tab-a"> <span> هل لديك حساب بالفعل؟ <a href="">تسجيل دخول</a></span> </div>
        </form>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
