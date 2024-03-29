import { ref } from "vue";
import { defineStore } from "pinia";
import type { IUser } from "@/types/user";

export const useUserStore = defineStore('user', () => {
    const user = ref<IUser>({
        id: 60609,
        name: 'Рамазан',
        surname: '',
        patronymic: '',
        discont: 0.1,
        items: [],
        profileImage: {
            file: {
                url: '',
                name: '',
            }
        },
        authorized: true,
        userAccessKey: 'e94904eb7b8dac3e670b8bfa6c306ef3',
    });

    return {
        user,
    }
})
