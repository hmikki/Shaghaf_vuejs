<template>
    <div class="modal fade change-pas" id="exampleModalCenter-3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="modal-header">
                    <p>تغيير كلمة المرور</p>
                </div>
                <div class="modal-body secound-m">
                    <div class="form-group">
                        <label for="inputPassword-1"> <i class="fas fa-lock"></i> كلمة المرور القديمة</label>
                        <input type="password" class="form-control" id="inputPassword-1" placeholder="كلمة المرور القديمة">
                    </div>
                    <div class="form-group">
                        <label for="inputPassword-2"> <i class="fas fa-lock"></i> كلمة المرور الجديدة</label>
                        <input type="password" class="form-control" id="inputPassword-2" placeholder="كلمة المرور الجديدة">
                    </div>
                    <div class="form-group">
                        <label for="inputPassword-3"> <i class="fas fa-lock"></i>تأكيد كلمة المرور الجديدة</label>
                        <input type="password" class="form-control" id="inputPassword-3" placeholder="تأكيد كلمة المرور الجديدة">
                    </div>
                    <div class="tab-button">
                        <button type="submit" class="btn">تغيير</button>
                    </div>
                    <div class="tab-a"></div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
