<template>
    <div class="row m-0 w-100">
        <div class="play col-2 d-flex justify-content-around align-items-center">
            <span class="fa-stack fa-lg icon-color">
                <i class="fa fa-circle-thin fa-stack-2x"></i>
                <i class="fa fa-step-backward fa-stack-1x"></i>
            </span>
            <span class="fa-stack fa-2x icon-color">
                <i class="fa fa-circle-thin fa-stack-2x"></i>
                <i class="fa fa-play fa-stack-1x pl-1"></i>
            </span>
            <span class="fa-stack fa-lg icon-color">
                <i class="fa fa-circle-thin fa-stack-2x"></i>
                <i class="fa fa-step-forward fa-stack-1x"></i>
            </span>
        </div>
        <div class="col-6 d-flex flex-column justify-content-center">
            <div>胡彦斌-你要的全拿走</div>
            <div class="row m-0 d-flex justify-content-around align-items-center">
                <div class="progress col-10">
                    <div class="progress-bar progress-bar-animated" style="width:30%"></div>
                </div>
                <div class="col-2">01:29/04:49</div>
            </div>
        </div>
        <div class="ctrl col-4 d-flex justify-content-around align-items-center">
            <i class="fa fa-heart-o icon-color" aria-hidden="true"></i>
            <i class="fa fa-download icon-color" aria-hidden="true"></i>
            <i class="fa fa-random icon-color" aria-hidden="true"></i>
            <i class="fa fa-bars icon-color" aria-hidden="true"></i>
            <i class="fa fa-volume-up icon-color" aria-hidden="true"></i>
            <i class="fa fa-comments" aria-hidden="true"></i>
            <i class="fa fa-indent icon-color" aria-hidden="true"></i>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.progress {
    margin: 0;
    padding: 0;
    height: 5px;
}
</style>
