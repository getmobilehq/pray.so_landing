import { comparisonData } from '../../data/content';

export function Comparison() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-light text-neutral-900 mb-16 text-center">
        Pray.so vs Traditional Prayer Groups
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-neutral-200">
              <th className="text-left py-4 px-4 text-neutral-900"></th>
              <th className="text-center py-4 px-4 text-neutral-900 font-medium">
                Traditional Prayer Groups
              </th>
              <th className="text-center py-4 px-4 text-neutral-900 font-medium">Pray.so</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, i) => (
              <tr key={i} className="border-b border-neutral-100">
                <td className="py-4 px-4 text-neutral-900">{row.feature}</td>
                <td className="py-4 px-4 text-center text-neutral-600">{row.traditional}</td>
                <td className="py-4 px-4 text-center text-neutral-900 font-medium">{row.prayso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
