import React from 'react'

const MyDoc = () => {
  return (
     <table className="w-lg">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="px-4 py-2 text-left">Usages</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Code</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">Primary</td>
                <td className="px-4 py-2">Fresh Mint</td>
                <td className="px-4 py-2">#2EC4B6</td>
                <td className="px-4 py-2" style={{ backgroundColor: "#2EC4B6" }}></td>
              </tr>
               <tr>
                <td className="px-4 py-2">Secondary</td>
                <td className="px-4 py-2">Harvest Orange</td>
                <td className="px-4 py-2">#FF9F1C</td>
                <td className="px-4 py-2" style={{ backgroundColor: "#FF9F1C" }}></td>
              </tr>
               <tr>
                <td className="px-4 py-2">Background</td>
                <td className="px-4 py-2">Cloud White</td>
                <td className="px-4 py-2">#F9FBFF</td>
                <td className="px-4 py-2" style={{ backgroundColor: "#F9FBFF" }}></td>
              </tr>
              <tr>
                <td className="px-4 py-2">Surface</td>
                <td className="px-4 py-2">Soft Cream</td>
                <td className="px-4 py-2">#F7F3E3</td>
                <td className="px-4 py-2" style={{ backgroundColor: "#F7F3E3" }}></td>
              </tr>
              <tr>
                <td className="px-4 py-2">Primary Text</td>
                <td className="px-4 py-2">Deep Navy</td>
                <td className="px-4 py-2">#192A56</td>
                <td className="px-4 py-2" style={{ backgroundColor: "#192A56" }}></td>
              </tr>
              <tr>
                <td className="px-4 py-2">Secondary Text</td>
                <td className="px-4 py-2">Slate Grey</td>
                <td className="px-4 py-2">#5C677D</td>
                <td className="px-4 py-2" style={{ backgroundColor: "#5C677D" }}></td>
              </tr>
            </tbody>
          </table>
  )
}

export default MyDoc