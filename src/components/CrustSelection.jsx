const CrustSelection = ({ crust, setCrust }) => {
  return (
    <div>
      <div>
        <label className="flex items-center gap-x-2 cursor-pointer">
          <input
            className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary cursor-pointer"
            type="radio"
            name="crust"
            value="traditional"
            checked={crust === "traditional"}
            onChange={(e) => setCrust(e.target.value)}
          />
          Traditional
        </label>
        <label className="flex items-center gap-x-2 cursor-pointer">
          <input
            className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary cursor-pointer"
            type="radio"
            name="crust"
            value="thin"
            checked={crust === "thin"}
            onChange={(e) => setCrust(e.target.value)}
          />
          Thin
        </label>
      </div>
    </div>
  );
};

export default CrustSelection;
