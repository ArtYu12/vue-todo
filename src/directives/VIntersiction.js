export default {
  name:"intersection",
    mounted(el,bindings) {
        let options = {
            threshold:1,
            rootMargin:"0px"
          }
      
          let callback = (entries,observer) => {
            if(entries[0].isIntersecting && bindings.value.page <=  bindings.value.totalPages) {
                bindings.value.loadMorePosts()
            }
          }
          const observer = new IntersectionObserver(callback,options)
          observer.observe(el)
    }
}