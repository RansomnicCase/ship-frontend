import Image from 'next/image';
import React from 'react';
import { TracingBeam } from './components/tracing-beam';
import { BackgroundBeams } from './components/background-beams';

export default function InformationPage() {
    return (

        <div className="p-8 max-w-4xl mx-auto">
        <BackgroundBeams />
            
            <TracingBeam>
            <div className="mb-8">
                <Image 
                    src="/images/shipdraft.jpg" 
                    alt="Beautiful landscape" 
                    width={1200} 
                    height={800} 
                    className="rounded-lg"
                />
            </div>
            <h1 className="text-4xl font-bold mb-4">WD_min</h1>
            
            <p className="mb-6 text-lg text-gray-300">
                WD_min is the minimum water depth needed to ensure safe navigation and operation of a vessel, taking into account its draft and other factors.
            </p>
            <p className="mb-6 text-lg text-gray-300">
            The draft of a vessel is the vertical distance between the waterline and the bottom of the hull. WD_min must always be greater than the vessel's draft to prevent grounding.
            </p>
            <p className="mb-6 text-lg text-gray-300">
            WD_min is typically calculated as the sum of:
            Vessel's draft + Under-keel clearance + Safety margin.

            </p>
            <p className="mb-6 text-lg text-gray-300">
            In some advanced navigation systems, WD_min might be calculated dynamically, taking into account real-time factors like tides, waves, and vessel characteristics.
            </p>
            <p className="text-lg text-gray-300">
            WD_min usually includes a safety margin beyond the vessel's draft to account for factors like:

            Wave action
            Squat effect (the tendency for a vessel to sink deeper in shallow water)
            Tidal variations
            Uncertainty in depth measurements.
            </p>
            <br></br>
            <h1 className="text-4xl font-bold mb-4">WWL</h1>
            
            <p className="mb-6 text-lg text-gray-300">
            More weight always means more inertia, so the heavier boat needs more power to get to the same speed.
            </p>
            <p className="mb-6 text-lg text-gray-300">
            If you compare two otherwise similar boats, the heavier one will sit lower in the water, creating more frictional and wave resistance as well.
            </p>
            <p className="mb-6 text-lg text-gray-300">
            However - if two boats are similar but the heavier boat is also longer, it will go faster than the smaller boat if the sails/motor are scaled up. That applies to displacement boats only.

            </p>
            
            <br></br>

            <h1 className="text-4xl font-bold mb-4">LWL</h1>
            
            <p className="mb-6 text-lg text-gray-300">
            Length over Water Line (LWL) is the length of the vessel measured at the waterline, from the forward-most to the aft-most point.
            </p>
            <p className="mb-6 text-lg text-gray-300">
            LWL is a key dimension for determining the hull speed, which is the theoretical maximum speed of the vessel in calm water.
            </p>
            <p className="mb-6 text-lg text-gray-300">
            It also influences the vessel’s stability, resistance, and overall hydrodynamic performance.

            </p>
            
            <br></br>

            <h1 className="text-4xl font-bold mb-4">WVPI</h1>
            <div className="mb-8">
                <Image 
                    src="/images/shipweight.webp" 
                    alt="Beautiful landscape" 
                    width={1200} 
                    height={800} 
                    className="rounded-lg"
                />
            </div>
            <p className="mb-6 text-lg text-gray-300">
            More weight always means more inertia, so the heavier boat needs more power to get to the same speed.
            </p>
            <p className="mb-6 text-lg text-gray-300">
            If you compare two otherwise similar boats, the heavier one will sit lower in the water, creating more frictional and wave resistance as well.
            </p>
            <p className="mb-6 text-lg text-gray-300">
            However - if two boats are similar but the heavier boat is also longer, it will go faster than the smaller boat if the sails/motor are scaled up. That applies to displacement boats only.

            </p>
            
            <br></br>

            <h1 className="text-4xl font-bold mb-4">UKC</h1>
            <div className="mb-8">
                <Image 
                    src="/images/ukc.jpg" 
                    alt="Beautiful landscape" 
                    width={1200} 
                    height={800} 
                    className="rounded-lg"
                />
            </div>
            <p className="mb-6 text-lg text-gray-300">
            Under Keel Clearance (UKC) is the minimum vertical distance between the lowest point of the vessel&apos;s keel and the sea floor.
            </p>
            <p className="mb-6 text-lg text-gray-300">
            UKC is critical for safe navigation, especially in shallow waters.
            </p>
            <p className="mb-6 text-lg text-gray-300">
            Maintaining an adequate UKC helps prevent the vessel from grounding and ensures that the vessel can maneuver safely without striking underwater obstacles.

            </p>
            
            <br></br>

            <h1 className="text-4xl font-bold mb-4">dx_min</h1>
            <div className="mb-8">
                <Image 
                    src="/images/dx_minn.webp" 
                    alt="Beautiful landscape" 
                    width={1200} 
                    height={350} 
                    className="rounded-lg"
                />
            </div>
            <p className="mb-6 text-lg text-gray-300">
            dx_min is a float value representing the smallest allowable distance between nodes (grid points) in the model after node reduction has been applied.
            </p>
            <p className="mb-6 text-lg text-gray-300">
            The dx_min parameter ensures that, during the node reduction process, nodes are not spaced too closely together.
            </p>
            <p className="mb-6 text-lg text-gray-300">
            This is particularly important for maintaining a balance between computational efficiency and the accuracy of the model.
            </p>
            
            <br></br>

            <h1 className="text-4xl font-bold mb-4">Blend</h1>
            <div className="mb-8">
                <Image 
                    src="/images/blendfac.jpg" 
                    alt="Beautiful landscape" 
                    width={1200} 
                    height={350} 
                    className="rounded-lg"
                />
            </div>
            <p className="mb-6 text-lg text-gray-300">
            The blend factor is a parameter that controls the relative importance between two different methods used in the node reduction process: the vorticity method and the magnitude method.
            </p>
            <p className="mb-6 text-lg text-gray-300">
            The blend factor (blend) allows you to control the trade-off between Vorticity Method and Magnitude Method.             </p>
            <p className="mb-6 text-lg text-gray-300">
            A blend factor closer to 1 emphasizes vorticity, while a blend factor closer to 0 emphasizes magnitude.            </p>
            
            <br></br>

            <h1 className="text-4xl font-bold mb-4">Non-Linearity Factor</h1>
            
            <p className="mb-6 text-lg text-gray-300">
            The non-linearity factor (nl) is a parameter that controls how non-linear the reduction process is, based on the characteristics of the flow. It consists of two values: nl_c and nl_m.
            Non-Linearity in Vorticity (nl_c):

            </p>
            <p className="mb-6 text-lg text-gray-300">
            -nl_c determines how strongly the vorticity influences the node reduction.
            </p>
            <p className="mb-6 text-lg text-gray-300">
            -nl_m determines how strongly the flow magnitude influences the node reduction.

            </p>
            <p className="mb-6 text-lg text-gray-300">
            Similarly, a higher value for nl_m makes the process more sensitive to changes in the flow magnitude, so areas with slight differences in flow speed could be treated very differently in terms of node preservation or reduction.
            </p>
            
            <br></br>
            
            
            


            <footer className="text-sm text-gray-400 mt-12"></footer>
            </TracingBeam>
            
        </div>
    
    );
}
