import React from "react";

const SectorSelection = ({ sectorNames, handleSetSector, priorChosenSector }: { sectorNames: string[], handleSetSector: (value: string) => void, priorChosenSector?: string }) => {
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        handleSetSector(event.target.value);
    }
    
    return (
        <select name="sectors" id="sectors" onChange={handleSelect} value={priorChosenSector}>
            <option value="">בחר מדור...</option>
            {sectorNames.map(s => <option key={`${s}x`} value={s}>{s}</option>)}
        </select>
    );
};

export default SectorSelection;