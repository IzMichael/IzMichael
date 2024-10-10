import type { PageServerLoad } from './$types';

// export type LanyardData = {
//     kv: {
//         [key: string]: string;
//     };
//     discord_user: {
//         id: string;
//         username: string;
//         avatar: string;
//         discriminator: '0';
//         clan: string | null;
//         avatar_decoration_data: string | null;
//         bot: boolean;
//         global_name: string;
//         display_name: string;
//         public_flags: number;
//     };
//     activities: {
//         flags: number;
//         id: string;
//         name: string;
//         type: number;
//         state: string;
//         session_id: string;
//         details: string;
//         application_id: string;
//         timestamps: { start: number; end: number };
//         assets: {
//             large_image: string;
//             large_text: string;
//             small_image: string;
//             small_text: string;
//         };
//         sync_id: string;
//         created_at: number;
//         buttons: string[];
//         party: { id: string };
//     }[];
//     discord_status: 'online' | 'away' | 'dnd';
//     active_on_discord_web: boolean;
//     active_on_discord_desktop: boolean;
//     active_on_discord_mobile: boolean;
//     listening_to_spotify: boolean;
//     spotify:
//         | {
//               timestamps: { start: number; end: number };
//               album: string;
//               album_art_url: string;
//               artist: string;
//               song: string;
//               track_id: string;
//           }
//         | undefined;
// };

export const load: PageServerLoad = async () => {
    //     const lanyard: { data: LanyardData } = await fetch('https://api.lanyard.rest/v1/users/349062232652382220').then(
    //         (res) => {
    //             return res.json();
    //         }
    //     );
    //     return { lanyard: lanyard.data, spotify: lanyard.data.spotify };
    return {};
};
