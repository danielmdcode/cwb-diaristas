import { User } from "@/app/types";
import Header from "@/components/Header/Header";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/currency";
import { formatShowDate } from "@/utils/date";
import RatingsDisplay from "./components/RatingsDisplay";
import CustomAvatar from "@/components/CustomAvatar";
import CalendarDisplay from "./components/CalendarDisplay";

type IProfilePage = {
    professionalDetail: User;
}

export default function ProfilePage({ professionalDetail }: IProfilePage) {
    return (
        <>
            <Header />
            <div className="container mx-auto p-4">
                <div className="flex py-8 gap-8">
                    <div className="w-full md:w-8/12 flex flex-col gap-12">
                        <div className="bg-white p-8">
                            <div className="flex gap-8">
                                <CustomAvatar avatar={professionalDetail.userInfo.avatar} name={professionalDetail.nome} />
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-3xl font-bold">{professionalDetail.nome}</h3>
                                        {professionalDetail.userInfo.verificationStatus === 'PENDING' && (
                                            <small className="text-red-500">Perfil não verificado</small>
                                        )}
                                        <p className="text-xs">Curitiba, PR</p>
                                        <p className="text-xs">Perfil criado em: {formatShowDate(professionalDetail.createdAt)}</p>
                                    </div>
                                    <RatingsDisplay professionalDetail={professionalDetail} />
                                </div>
                            </div>

                            <Button size={"full"} className="mt-12">
                                <span className="text-white">Agendar com a profissional</span>
                            </Button>
                        </div>

                        <div className="bg-white p-8">
                            <h4 className="font-bold text-2xl">Experiência</h4>
                            <p className="mt-8">
                                {professionalDetail.userInfo.experience || 'Não informado'}
                            </p>
                        </div>

                        <div className="bg-white p-8">
                            <h4 className="font-bold text-2xl">Preços e serviços</h4>
                            <p className="mt-8">
                                <strong>Dias disponíveis:</strong> {professionalDetail.userInfo.availabilitySchedule.map(schedule => schedule.dayOfWeek).join(', ') || 'Não informado'}
                            </p>
                            <p className="mt-2">
                                <strong>Bairros:</strong> {professionalDetail.userInfo.serviceZones.map(zone => zone.serviceZone.neighborhood).join(', ') || 'Não informado'}
                            </p>
                            <p className="mt-2">
                                <strong>Preço:</strong> {formatCurrency(professionalDetail.userInfo.price) || 'Não informado'}
                            </p>
                        </div>

                        <div className="bg-white p-8">
                            <h4 className="font-bold text-2xl mb-4">Avaliações</h4>
                            <RatingsDisplay professionalDetail={professionalDetail} />
                            <div className="mt-4 flex flex-col gap-8 mt-8">
                                {professionalDetail.userInfo.ratings?.map((rate, index) => {
                                    const isLast = index === (professionalDetail.userInfo.ratings?.length || 0) - 1;
                                    return (
                                        <>
                                            <div key={rate.id}>
                                                <p className="flex items-center gap-2 mb-4">
                                                    <CustomAvatar size={30} avatar={rate.ratedBy.userInfo.avatar} name={rate.ratedBy.nome} />
                                                    <h4 className="text-lg font-bold">{rate.ratedBy.nome}</h4>
                                                </p>
                                                <p className="text-sm pl-10">{rate.comment}</p>
                                            </div>
                                            {!isLast && (
                                                <div className="w-full h-px bg-gray-200" />
                                            )}
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-4/12">
                        <div className="bg-white sticky top-2">
                            <div className="bg-primary text-white p-4">
                                <h3 className="text-xl font-bold">Agendar</h3>
                            </div>
                            <CalendarDisplay 
                                professionalDetail={professionalDetail}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}