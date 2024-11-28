<script setup>
const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true
  }
});


const updateTweets = inject('updateTweets')



const actionsOptions = [
      {
        label: 'Delete Post from',
        icon: 'pi pi-times',
        command: () => {
           deletePost.value = true;
        }
    },
    {
        label: 'Delete Reply',
        icon: 'pi pi-times',
        command: () => {
           allowDelete.value = true;
        }
    },
  
];




const clickLike = ref(false);
const allowDelete = ref(false);
const dialogReply = ref(false);

const replyChat = ref({
  temp: '',
});

const deletePost = ref(false);

const tweetsStore = useTweetsStore()

const { createReply, deleteReply } = tweetsStore;


</script>

<template>
    <div>
      <Card v-show="!deletePost" class="my-4" >
        <template #title>
          <div class="flex justify-between">
            <div class="flex ">
              <Avatar
              :image="tweet.avatar"
              class="mr-2"
              shape="circle"
              alt="User avatar"
            />
            <span class="font-bold">{{ tweet.username }}</span>
            </div>
            <SplitButton label="Opciones" variant="text" menuButtonIcon="pi pi-ellipsis-v"  :model="actionsOptions" />
          </div>
          <p>{{ tweet.createTime }}</p>
        </template>
        <template #content>
          <Editor  v-model="tweet.content">
            <template v-slot:toolbar>
              <span class="ql-formats">
              </span>
            </template>
          </Editor>
        </template>
        <template #footer>
              
          <div class="flex gap-4 mt-1 justify-end">
            
            <Button icon="pi pi-heart" :severity=" clickLike ? 'danger' : ''" aria-label="Filter" @click="clickLike = !clickLike" />
            <Button icon="pi pi-eye" :label="tweet.views" aria-label="Filter" />
            <Button icon="pi pi-hashtag" :label="tweet.hashtag" aria-label="Filter" />
            <Button icon="pi pi-reply" aria-label="Filter" @click="dialogReply = true" />
          </div>
          <div class="flex flex-col gap-3">
               <div v-for="(reply, index) in tweet.replies">
                <Card>
                    <template #content>
                        <div class="flex content-center gap-2">
                          <Button v-if="allowDelete" icon="pi pi-trash" severity="danger" @click="() => {
                            deleteReply(props.index,index)
                            updateTweets()
                          }" />
                          <Avatar
                            :image="reply.avatar"
                            class="mr-2"
                            shape="circle"
                            alt="User avatar"
                          />
                          <p class="font-bold">{{ reply.username }}: </p>
                          <div v-html="reply.content"></div>
                        </div>
                    </template>
                </Card>
                 
                </div> 
              </div>
        </template>
      </Card>
      


      <Dialog v-model:visible="dialogReply" header="Replicar Hilo" :style="{ width: '25rem' }">
          <Editor editorStyle="height: 140px" v-model="replyChat.temp">
            <template v-slot:toolbar>
              <span class="ql-formats">
                <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                <button
                  v-tooltip.bottom="'Underline'"
                  class="ql-underline"
                ></button>
              </span>
            </template>
          </Editor>
      
          <div class="flex gap-4 mt-1">
            <Button
              label="Cancel"
              @click="dialogReply = false"
              severity="secondary"
              outlined
              class="w-full"
            />
            <Button label="Reply" class="w-full" @click="() => {
              createReply(
              props.index,  
              {
                avatar: '/img/daggi.jpg',
                username: 'Fujoshi 69 UwU',
                createTime: 'Ahora mismo',
                content: replyChat.temp,
                retweets: 0,
                likes: 0,
              })
              replyChat.temp = ''
              dialogReply = false;
              updateTweets()
            }" />
            
          </div>
      </Dialog>
    </div>
</template>
  

  