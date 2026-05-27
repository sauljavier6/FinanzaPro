import { useState } from "react";
import CampañaList from "../../components/AdminComponents/Campaña/CampañaList";
import CampañaPlantilla from "../../components/AdminComponents/Campaña/CampañaPlantilla";

export default function CampañaPage() {
  const [showPlantilla, setShowPlantilla] = useState(true);
  const [campanaId, setCampanaId] = useState<number | null>(null);

  const handleBack = () => {
    setCampanaId(null);
    setShowPlantilla(true)
  };

  return (
    <>
      {showPlantilla ? (
        <CampañaList onCreate={() => setShowPlantilla(false)} onUpdate={(id) => {setCampanaId(id), setShowPlantilla(false)} } />
      ) : (
        <CampañaPlantilla onBack={handleBack} campanaId={campanaId}/>
      )}
    </>
  );
} 