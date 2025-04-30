'use client';

import { useEffect, useState } from 'react';
import { UserProfessional } from '@/services/professionalService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

type IProfessionalSlider = {
  professionals: UserProfessional[];
};

export function ProfessionalSlider({ professionals }: IProfessionalSlider) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log('professionals', professionals);
  }, [professionals]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= professionals.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? Math.max(0, professionals.length - 3) : prevIndex - 3
    );
  };

  if (professionals.length === 0) {
    return <div className="flex justify-center items-center h-64">Nenhum profissional encontrado</div>;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {professionals.map((professional) => (
            <CarouselItem key={professional._id?.toString()} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="size-[50px]">
                      {professional.userInfo.avatar && <AvatarImage src={professional.userInfo.avatar} />}
                      {!professional.userInfo.avatar && <AvatarImage src={`https://ui-avatars.com/api/?name=${professional.nome}&background=random`} />}
                    </Avatar>
                    <CardTitle>{professional.nome}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Bairros:</span> {professional.userInfo.serviceZones?.map(zone => zone.neighborhood).join(', ') || 'Não informado'}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Disponibilidade:</span> {professional.userInfo.availabilitySchedule?.map(schedule => `${schedule.dayOfWeek} de ${schedule.startTime} até ${schedule.endTime}`).join(', ') || 'Não informado'}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Preço:</span> {professional.userInfo.price}
                    </p>
                    <button className="bg-secondary text-white font-bold px-4 py-3 rounded-md hover:bg-white hover:text-primary transition cursor-pointer mt-4">
                      <a href={`/diarista/perfil/${professional._id}`}>
                        VER PERFIL
                      </a>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
} 