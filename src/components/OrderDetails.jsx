export default function OrderDetails({ order, notes }) {
  return (
    <div className="text-white">
      {/* Order heading */}
      <h3 className="text-[16px] font-serif mb-6 text-gray-300 tracking-wide uppercase text-sm">
        Our Order
      </h3>

      {/* Order list */}
      <ul className="space-y-4 mb-8">
        {order.map((item, index) => (
          <li key={index} className="border-l-2 border-gray-700 pl-4">
            <div className={`font-serif text-[15px] mb-1 ${item.highlight ? 'text-[#ff6b6b]' : 'text-white'}`}>
              {item.item}
              {item.quantity && <span className="text-gray-500 ml-2">×{item.quantity}</span>}
              {item.price && <span className="text-gray-500 ml-2">{item.price}</span>}
            </div>
            {item.note && (
              <div className="text-[12px] text-gray-400 italic leading-relaxed">
                {item.note}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* General notes */}
      {notes && notes.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-700">
          {notes.map((note, index) => (
            <p key={index} className="text-[13px] font-serif text-gray-300 leading-relaxed mb-3">
              {note}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
