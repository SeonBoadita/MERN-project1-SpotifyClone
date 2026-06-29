import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import dvdModelUrl from '../models/dvd.glb?url';
import img from '../images/image.png';
import { useNavigate } from 'react-router-dom';

const DvdModel = () => {
    const { scene } = useGLTF(dvdModelUrl);
    const modelRef = useRef();

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01;
            modelRef.current.rotation.x = -Math.PI;
        }
    });

    return (
        <primitive
            object={scene}
            ref={modelRef}
            scale={2}
            position={[0, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
    );
};

const MusicPlay = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const navigate = useNavigate();

    return (
        <div className="w-full h-full rounded-2xl overflow-hidden flex flex-col font-sans relative"
            style={{
                background: 'linear-gradient(110deg, #ffffff 35%, #050505 35%)',
            }}
        >
            {/* Top Navigation */}
            <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-10">
                <div className="flex items-center gap-6">
                    <button onClick={() => navigate('/')} className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white cursor-pointer hover:bg-gray-900 transition-colors">
                        <i className="fa-solid fa-arrow-left text-xl"></i>
                    </button>
                    <div className="flex items-center gap-3 tracking-widest text-xs font-semibold">
                        <div className="w-2 h-2 rounded-full bg-(--green)"></div>
                        <span className="text-black">NOW PLAYING</span>
                        <div className="flex items-end gap-[2px] h-3 ml-2">
                            <div className="w-[2px] h-[60%] bg-(--green)"></div>
                            <div className="w-[2px] h-[100%] bg-(--green)"></div>
                            <div className="w-[2px] h-[40%] bg-(--green)"></div>
                            <div className="w-[2px] h-[80%] bg-(--green)"></div>
                            <div className="w-[2px] h-[30%] bg-(--green)"></div>
                            <div className="w-[2px] h-[70%] bg-(--green)"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex pt-24 pb-4 relative z-0 min-h-0">
                {/* 3D Vinyl Side */}
                <div className="w-[45%] h-full flex items-center justify-center relative">
                    {/* Add some green decorative brush strokes using CSS */}
                    <div className="absolute w-[300px] h-[40px] bg-(--green) opacity-80 blur-sm transform -rotate-45 top-1/4 left-1/4 -z-10 mix-blend-multiply"></div>
                    <div className="absolute w-[200px] h-[30px] bg-(--green) opacity-80 blur-sm transform -rotate-45 bottom-1/4 left-1/3 -z-10 mix-blend-multiply"></div>

                    <div className="w-full h-full min-h-[300px] flex items-center justify-center">
                        <Canvas camera={{ position: [0, 5, 0], fov: 45 }}>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[0, 10, 0]} intensity={3} color="#ffffff" castShadow />
                            <spotLight position={[5, 10, 5]} intensity={8} color="#ffffff" angle={0.4} penumbra={1} />
                            <spotLight position={[-5, 10, -5]} intensity={8} color="#bbfc07" angle={0.4} penumbra={1} />
                            <Environment preset="studio" />
                            <Suspense fallback={null}>
                                <DvdModel />
                            </Suspense>
                            {/* <OrbitControls enableZoom={false} /> */}
                        </Canvas>
                    </div>
                </div>

                {/* Player Controls Side */}
                <div className="w-[55%] h-full flex flex-col justify-center px-16 text-white">
                    <div className="flex items-center gap-2 text-(--green) text-xs font-semibold tracking-widest mb-4">
                        <i className="fa-solid fa-music"></i>
                        <span>NOW PLAYING</span>
                    </div>

                    <div className="flex justify-between items-start mb-2">
                        <h1 className="text-6xl font-bold font-sans uppercase leading-none tracking-tighter" style={{ fontFamily: 'impact, sans-serif' }}>
                            PIXEL PEEKER<br />POLKA - FASTER
                        </h1>
                        <button className="text-(--green) hover:text-white transition-colors mt-2">
                            <i className="fa-regular fa-heart text-2xl"></i>
                        </button>
                    </div>

                    <div className="flex items-center gap-2 mb-12">
                        <span className="text-gray-300 text-lg">Kevin MacLeod</span>
                        <div className="w-4 h-4 rounded-full bg-(--green) flex items-center justify-center text-black text-[10px]">
                            <i className="fa-solid fa-check"></i>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full mb-8">
                        <div className="w-full h-1 bg-gray-800 rounded-full mb-3 relative cursor-pointer">
                            <div className="absolute top-0 left-0 h-full w-1/3 bg-(--green) rounded-full"></div>
                            <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-(--green) rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(187,252,7,0.5)]"></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400 font-medium">
                            <span>1:26</span>
                            <span>3:21</span>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between mb-12 px-4">
                        <button className="text-gray-400 hover:text-white transition-colors">
                            <i className="fa-solid fa-shuffle text-xl"></i>
                        </button>
                        <button className="text-white hover:text-(--green) transition-colors">
                            <i className="fa-solid fa-backward-step text-2xl"></i>
                        </button>
                        <button
                            className="w-20 h-20 bg-(--green) rounded-full flex items-center justify-center text-black text-3xl shadow-[0_0_30px_rgba(187,252,7,0.3)] hover:scale-105 transition-transform"
                            onClick={() => setIsPlaying(!isPlaying)}
                        >
                            <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play ml-1'}`}></i>
                        </button>
                        <button className="text-white hover:text-(--green) transition-colors">
                            <i className="fa-solid fa-forward-step text-2xl"></i>
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors">
                            <i className="fa-solid fa-repeat text-xl"></i>
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex items-center justify-center gap-12 text-xs font-semibold tracking-widest text-gray-400 border-t border-gray-800 pt-6">
                        <button className="hover:text-white transition-colors flex items-center gap-2 text-white">
                            <i className="fa-solid fa-list"></i> LYRICS
                        </button>
                        <div className="w-[1px] h-4 bg-gray-800"></div>
                        <button className="hover:text-white transition-colors flex items-center gap-2">
                            <i className="fa-solid fa-list-ul"></i> QUEUE
                        </button>
                        <div className="w-[1px] h-4 bg-gray-800"></div>
                        <button className="hover:text-white transition-colors flex items-center gap-2">
                            <i className="fa-solid fa-circle-info"></i> INFO
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Song List */}
            <div className="h-[25%] bg-[#0a0a0a] w-full border-t border-[#1a1a1a] p-6 flex flex-col z-10">
                <div className="flex items-center gap-2 mb-4 text-xs font-bold tracking-widest text-white">
                    <span>SONG LIST</span>
                    <div className="w-2 h-2 rounded-full bg-(--green)"></div>
                </div>

                <div className="flex items-center gap-4 overflow-hidden relative">
                    <button className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 absolute left-0 z-10 bg-[#0a0a0a]">
                        <i className="fa-solid fa-chevron-left text-xs"></i>
                    </button>

                    <div className="flex gap-4 overflow-x-auto scrollbar-hide px-10 w-full">
                        {/* Active Song Card */}
                        <div className="min-w-[280px] bg-[#1a1a1a] border border-(--green) rounded-xl p-3 flex items-center gap-4 relative overflow-hidden group cursor-pointer shadow-[0_0_15px_rgba(187,252,7,0.1)]">
                            <div className="absolute top-0 left-0 w-1 h-full bg-(--green)"></div>
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                                    <div className="w-6 h-6 rounded-full bg-(--green) flex items-center justify-center text-black text-[10px]">
                                        <i className="fa-solid fa-play ml-[2px]"></i>
                                    </div>
                                </div>
                                <img src={img} alt="cover" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col flex-1 truncate">
                                <span className="text-(--green) text-sm font-semibold truncate">Pixel Peeker Polka - faster</span>
                                <span className="text-gray-400 text-xs truncate">Kevin MacLeod</span>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <div className="flex items-end gap-[1px] h-3">
                                    <div className="w-[2px] h-[60%] bg-(--green)"></div>
                                    <div className="w-[2px] h-[100%] bg-(--green)"></div>
                                    <div className="w-[2px] h-[40%] bg-(--green)"></div>
                                </div>
                                <span className="text-gray-400 text-xs font-mono">3:21</span>
                            </div>
                        </div>

                        {/* Other Song Cards */}
                        {[
                            { title: 'Brightly Fancy', artist: 'Kevin MacLeod', time: '2:14' },
                            { title: 'Movement Proposition', artist: 'Kevin MacLeod', time: '2:20' },
                            { title: 'Blobby Samba', artist: 'Kevin MacLeod', time: '3:53' },
                            { title: 'Notanico Merengue', artist: 'Kevin MacLeod', time: '3:01' }
                        ].map((song, i) => (
                            <div key={i} className="min-w-[240px] bg-[#111111] hover:bg-[#1a1a1a] rounded-xl p-3 flex items-center gap-4 cursor-pointer transition-colors border border-transparent">
                                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 opacity-70 group-hover:opacity-100">
                                    <img src={img} alt="cover" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col flex-1 truncate">
                                    <span className="text-white text-sm font-semibold truncate">{song.title}</span>
                                    <span className="text-gray-500 text-xs truncate">{song.artist}</span>
                                </div>
                                <span className="text-gray-500 text-xs font-mono">{song.time}</span>
                            </div>
                        ))}
                    </div>

                    <button className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 absolute right-0 z-10 bg-[#0a0a0a]">
                        <i className="fa-solid fa-chevron-right text-xs"></i>
                    </button>
                </div>

                {/* Scroll Indicator */}
                <div className="flex justify-center gap-1 mt-4">
                    <div className="w-8 h-1 bg-(--green) rounded-full"></div>
                    <div className="w-8 h-1 bg-gray-800 rounded-full"></div>
                    <div className="w-8 h-1 bg-gray-800 rounded-full"></div>
                    <div className="w-8 h-1 bg-gray-800 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default MusicPlay;
