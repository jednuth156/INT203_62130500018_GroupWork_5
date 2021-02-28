app.component('photo-search',{
    props:{
        form : Object
    },
    template: 
    /*html*/
    `
    <div class="flex justify-center py-4">
    <span :class="{'hidden' : form.search }"><i class="fas fa-search" @click="search"></i></span>
    <span :class="{'hidden' : !form.search}">
        <input class="px-2 border-2 border-black mx-2 " placeholder="Please enter text"
            v-model="form.text">
        <button class="mx-2 rouned text-white px-4 py-2 bg-blue-500" @click="cancel">Cancle</button>
    </span>
</div>
    `,
   
    methods: {
        search() {
            this.form.search = !this.form.search;
        },
        cancel() {
            this.form.search = !this.form.search
            this.form.text = '';
        },
    }
})