// Central Database - Sabhi pages yahan se data uthayenge
const dbVideos = [
    { id: 1, title: "Kenki Virgo", ep: "Ep 1-2", tags: ["Action", "Demons"], rating: 5, desc: "A legendary warrior falls into a demonic trap.", date: "2026-03-25", tgLink: "https://t.me/yourchannel", image: "https://picsum.photos/seed/k1/320/400", isFeatured: true, isUpcoming: false },
    { id: 2, title: "Honey Blonde", ep: "Ep 1", tags: ["Romance", "Vanilla"], rating: 4, desc: "A sweet encounter with a mysterious girl.", date: "2026-03-20", tgLink: "https://t.me/yourchannel", image: "https://picsum.photos/seed/h2/320/400", isFeatured: true, isUpcoming: false },
    { id: 3, title: "Neon Nights", ep: "Ep 4", tags: ["Cyberpunk"], rating: 5, desc: "Cyber-succubus hunts in Neo-Tokyo.", date: "2026-03-18", tgLink: "https://t.me/yourchannel", image: "https://picsum.photos/seed/n3/320/400", isFeatured: true, isUpcoming: false },
    { id: 4, title: "Kunoichi Defeat", ep: "Ep 3", tags: ["Ninja", "Action"], rating: 4, desc: "Female ninja captured by rivals.", date: "2026-03-15", tgLink: "https://t.me/yourchannel", image: "https://picsum.photos/seed/kd4/320/400", isFeatured: true, isUpcoming: false },
    { id: 5, title: "Elf Market", ep: "Ep 1", tags: ["Fantasy"], rating: 3, desc: "Elf finds herself on the auction block.", date: "2026-03-10", tgLink: "https://t.me/yourchannel", image: "https://picsum.photos/seed/em5/320/400", isFeatured: false, isUpcoming: false },
    { id: 6, title: "Maid Cafe", ep: "Ep 2", tags: ["Comedy"], rating: 5, desc: "Gyaru girls at a maid cafe.", date: "2026-03-08", tgLink: "https://t.me/yourchannel", image: "https://picsum.photos/seed/mc6/320/400", isFeatured: false, isUpcoming: false },
    { id: 7, title: "Teacher Secret", ep: "Ep 1", tags: ["Milf", "School"], rating: 4, desc: "Strict teacher's dark secret.", date: "2026-03-05", tgLink: "https://t.me/yourchannel", image: "https://picsum.photos/seed/ts7/320/400", isFeatured: false, isUpcoming: false },
    { id: 8, title: "Vampire Sisters", ep: "Ep 3", tags: ["Gothic"], rating: 5, desc: "Trapped with three vampire sisters.", date: "2026-03-01", tgLink: "https://t.me/yourchannel", image: "https://picsum.photos/seed/vs8/320/400", isFeatured: false, isUpcoming: false },
    { id: 9, title: "Cyber Idol", ep: "Ep 1", tags: ["Idol"], rating: 3, desc: "Virtual idol avatar hacked.", date: "2026-02-28", tgLink: "https://t.me/yourchannel", image: "https://picsum.photos/seed/ci9/320/400", isFeatured: false, isUpcoming: false },
    { id: 10, title: "Magical Fall", ep: "Ep 2", tags: ["Magical Girl"], rating: 5, desc: "City protector falls into slime trap.", date: "2026-02-25", tgLink: "https://t.me/yourchannel", image: "https://picsum.photos/seed/mf10/320/400", isFeatured: false, isUpcoming: false },
    { id: 11, title: "Step-Sister", ep: "Ep 1", tags: ["Incest"], rating: 4, desc: "Late night mistake with sister.", date: "2026-02-20", tgLink: "https://t.me/yourchannel", image: "https://picsum.photos/seed/ss11/320/400", isFeatured: false, isUpcoming: false },
    { id: 12, title: "Space Pirates", ep: "Ep 1", tags: ["Sci-Fi"], rating: 0, desc: "Coming soon to the stars.", date: "2026-04-10", tgLink: "https://t.me/yourchannel", image: "https://picsum.photos/seed/sp12/320/400", isFeatured: false, isUpcoming: true }
];

// Helper to save/load local data if modified by admin
function getVideos() {
    const local = localStorage.getItem('h_vault_db');
    return local ? JSON.parse(local) : dbVideos;
}

