<template>
    <div>
        <ul class="nav nav-tabs nav-justified border-bottom-0" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link rounded-0 active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                        <i class="fa fa-music" aria-hidden="true"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-0" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-0" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                        <i class="fa fa-cloud" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="accordion" id="accordionExample">
                    <div class="card rounded-0">
                        <button class="card-header btn text-left" id="headingOne" type="button" data-toggle="collapse"
                            data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h5><b>>默认列表</b></h5>
                        </button>
                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                            data-parent="#accordionExample">
                            <ul class="card-body list-group p-0">
                                <li class="list-group-item">
                                    <h6>纯音乐-将军令</h6>
                                </li>
                                <li class="list-group-item">
                                    <h6>某个音乐</h6>
                                </li>
                                <li class="list-group-item">
                                    <h6>另一个音乐</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card rounded-0">
                        <button class="card-header btn text-left collapsed" id="headingTwo" type="button" data-toggle="collapse"
                            data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <h5><b>>最近播放</b></h5>
                        </button>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                            data-parent="#accordionExample">
                            <ul class="card-body list-group p-0">
                                <li class="list-group-item">
                                    <h6>纯音乐-将军令</h6>
                                </li>
                                <li class="list-group-item">
                                    <h6>某个音乐</h6>
                                </li>
                                <li class="list-group-item">
                                    <h6>另一个音乐</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card rounded-0">
                        <button class="card-header btn text-left collapsed" id="headingThree" type="button" data-toggle="collapse"
                            data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <h5><b>>某个歌单</b></h5>
                        </button>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                            data-parent="#accordionExample">
                            <ul class="card-body list-group p-0">
                                <li class="list-group-item">
                                    <h6>纯音乐-将军令</h6>
                                </li>
                                <li class="list-group-item">
                                    <h6>某个音乐</h6>
                                </li>
                                <li class="list-group-item">
                                    <h6>另一个音乐</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="accordion" id="accordionExample">
                    <div class="card rounded-0">
                        <button class="card-header btn text-left" id="headingOne" type="button" data-toggle="collapse"
                            data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h5><b>>收藏歌曲</b></h5>
                        </button>
                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                            data-parent="#accordionExample">
                            <ul class="card-body list-group p-0">
                                <li class="list-group-item">
                                    <h6>纯音乐-将军令</h6>
                                </li>
                                <li class="list-group-item">
                                    <h6>某个音乐</h6>
                                </li>
                                <li class="list-group-item">
                                    <h6>另一个音乐</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card rounded-0">
                        <button class="card-header btn text-left collapsed" id="headingTwo" type="button" data-toggle="collapse"
                            data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <h5><b>>收藏歌单</b></h5>
                        </button>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                            data-parent="#accordionExample">
                            <ul class="card-body list-group p-0">
                                <li class="list-group-item">
                                    <h6>纯音乐-将军令</h6>
                                </li>
                                <li class="list-group-item">
                                    <h6>某个音乐</h6>
                                </li>
                                <li class="list-group-item">
                                    <h6>另一个音乐</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card rounded-0">
                        <button class="card-header btn text-left collapsed" id="headingThree" type="button" data-toggle="collapse"
                            data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <h5><b>>收藏歌手</b></h5>
                        </button>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                            data-parent="#accordionExample">
                            <ul class="card-body list-group p-0">
                                <li class="list-group-item">
                                    <h6>纯音乐-将军令</h6>
                                </li>
                                <li class="list-group-item">
                                    <h6>某个音乐</h6>
                                </li>
                                <li class="list-group-item">
                                    <h6>另一个音乐</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div class="accordion" id="accordionExample">
                    <div class="card rounded-0">
                        <button class="card-header btn text-left" id="headingOne" type="button" data-toggle="collapse"
                            data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h5><b>>我的设备</b></h5>
                        </button>
                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                            data-parent="#accordionExample">
                            <ul class="card-body list-group p-0">
                                <li class="list-group-item">
                                    <h6>纯音乐-将军令</h6>
                                </li>
                                <li class="list-group-item">
                                    <h6>某个音乐</h6>
                                </li>
                                <li class="list-group-item">
                                    <h6>另一个音乐</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card rounded-0">
                        <button class="card-header btn text-left collapsed" id="headingTwo" type="button" data-toggle="collapse"
                            data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <h5><b>>音乐云盘</b></h5>
                        </button>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                            data-parent="#accordionExample">
                            <ul class="card-body list-group p-0">
                                <li class="list-group-item">
                                    <h6>纯音乐-将军令</h6>
                                </li>
                                <li class="list-group-item">
                                    <h6>某个音乐</h6>
                                </li>
                                <li class="list-group-item">
                                    <h6>另一个音乐</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.nav {
    text-align: center;
}

.nav-tabs .nav-link.active,.card,.list-group-item {
    border: 0;
    background-color: rgba(0,0,0,0);
    color: #000;
}

h5,h6 {
    color: #000;
    font-size: 0.8em;
}

</style>