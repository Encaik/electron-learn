<template>
    <div>
        <iframe src="https://www.kugou.com/yy/html/rank.html" frameborder="0" width="100%" height="100%"></iframe>
    </div>
</template>

<script>
export default {
    methods: {
        setIframeHeight(iframe) {
            iframe.οnlοad=function(){
                var bHeight = iframe.contentWindow.document.body.scrollHeight;
                var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
                var height = Math.min(bHeight, dHeight);
                iframe.height = height;
	        }
        }
    },
    created() {
        this.setIframeHeight(document.getElementById('iframeContent'))
    }
}
</script>

<style scoped>

</style>
