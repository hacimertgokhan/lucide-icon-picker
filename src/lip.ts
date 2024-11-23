import * as icons from 'lucide-react';

function getIcon(iconName: any) {
    try {
        const formattedIconName = iconName.charAt(0).toUpperCase() + iconName.slice(1);
        // @ts-ignore
        if (icons[formattedIconName]) {
            // @ts-ignore
            return icons[formattedIconName];
        } else {
            console.error(`"${iconName}" isimli ikon Lucide kütüphanesinde bulunamadı.`);
            return null;
        }
    } catch (error) {
        console.error('İkon yüklenirken bir hata oluştu:', error);
        return null;
    }
}

export default getIcon;