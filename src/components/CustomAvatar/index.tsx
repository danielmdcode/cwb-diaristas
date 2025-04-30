import { Avatar, AvatarImage } from '@/components/ui/avatar';

type ICustomAvatarProps = {
    avatar?: string;
    name: string;
    size?: number;
}

export default function CustomAvatar({ avatar, name, size = 120 }: ICustomAvatarProps) {
    console.log('size', size);
    
    return (
        <Avatar className={`size-[${size}px]`}>
            {avatar && <AvatarImage src={avatar} width={size} height={size} className={`size-[${size}px]`} />}
            {!avatar && <AvatarImage src={`https://ui-avatars.com/api/?name=${name}&background=random`} width={size} height={size} className={`size-[${size}px]`} />}
        </Avatar>
    )
}