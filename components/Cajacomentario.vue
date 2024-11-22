<template>
 <Card >
        <template #title>
          <div class="flex">
            <Avatar
              image="/img/daggi.jpg"
              class="mr-2"
              shape="circle"
              alt="User avatar"
            />
            <span class="font-bold">Fujoshi 69 UwU</span>
          </div>
        </template>
        <template #content>
          <Editor editorStyle="height: 140px">
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
        </template>
        <template #footer>
          <div class="flex gap-4 mt-1">
            <Button
              label="Cancel"
              severity="secondary"
              outlined
              class="w-full"
            />
            <Button label="Post" class="w-full" />
          </div>
        </template>
      </Card>
</template>