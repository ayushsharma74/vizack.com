'use client'
import './blogpage.css'
import BlogTitle from '@/components/blogComponents/BlogTitle'
import Link from 'next/link'
import Image from 'next/image'
const imgloader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 95}`;
};

export default function BlogPage() {
    
    return (
        <>
            <div className="bg-default w-full min-h-10 h-fit py-2 flex flex-wrap items-center px-5" >
                <h1 className="text-white hover:text-default-gray font-bold">
                    <Link href={"/"}>Home &nbsp;</Link>
                </h1>
                <h1 className="text-white font-bold"> &gt;</h1>
                <h1 className="text-white hover:text-default-gray font-bold">
                    <Link href={`/blogs`} >&nbsp; Blogs &nbsp;</Link>
                </h1>
                <h1 className="text-white font-bold"> &gt;</h1>
                <h1 className="text-white hover:text-default-gray font-bold truncate">
                    <Link href={`/blogs/neural-networks-explained`} >&nbsp; Demystifying Neural Networks: How Do They Really Work?</Link>
                </h1>
            </div>
            <div className='cont my-10'>
                <BlogTitle title={"Demystifying Neural Networks: How Do They Really Work?"} writer={"Ayush"} date={"23.3.2024"} category={"DATA SCIENCE"}/>

        <p className='font-serif text-lg mb-4'>
            In the vast landscape of artificial intelligence, neural networks stand out as one of the most intriguing and powerful tools. From recognizing faces in photos to driving cars autonomously, neural networks have revolutionized numerous industries. But how exactly do these complex systems work? Let's delve into the inner workings of neural networks and demystify their functionality.
        </p>
        <Image 
            loader={imgloader}
            src={"https://www.microsoft.com/en-us/research/uploads/prod/2019/12/MSR_NeuralMemory_V5_1400x788.gif"}
            width={500}
            height={500}
            loading='lazy'
            quality={100}
            className='min-w-full'
            alt='memmory-controller-gif'
        />
        <h1 className='font-bold text-2xl'>Understanding the Basics</h1>

        <p className='font-serif text-lg mb-4'>
            At its core, a neural network is a computational model inspired by the structure and functioning of the human brain. Just like the brain, it consists of interconnected nodes, or neurons, organized into layers. These layers include an input layer, one or more hidden layers, and an output layer.
        </p>

        <h1 className='font-bold text-2xl'>Input Layer:</h1>

        <p className='font-serif text-lg mb-4'>
            This layer receives data, such as images, text, or numerical values, and passes it on to the next layer. Each neuron in the input layer represents a feature of the input data.
        </p>
        
        <h1 className='font-bold text-2xl'>Hidden Layers:</h1>

        <p className='font-serif text-lg mb-4'>
            These intermediate layers process the input data through a series of mathematical operations. Each neuron in a hidden layer receives inputs from the neurons in the previous layer, applies a mathematical transformation (activation function), and passes the result to the neurons in the next layer. The number of hidden layers and neurons in each layer varies depending on the complexity of the problem being solved.
        </p>

        <h1 className='font-bold text-2xl'>Output Layer:</h1>
        
        <p className='font-serif text-lg mb-4'>
            The final layer produces the network's output, which could be a classification label, a numerical value, or some other form of prediction.
        </p>
        <Image 
            loader={imgloader}
            src={"https://cdn.analyticsvidhya.com/wp-content/uploads/2021/05/94709Convolutional_Neural_Network_to_identify_the_image_of_a_bird.png"}
            width={500}
            height={500}
            loading='lazy'
            quality={100}
            className='min-w-full mx-auto'
            alt='output-layer'
        />
        <br />

        <h1 className='font-bold text-2xl'>Learning Through Training</h1>

        <p className='font-serif text-lg mb-4'>
            The strength of a neural network lies in its ability to learn from data. This learning process, known as training, involves adjusting the network's parameters to minimize the difference between its predictions and the actual outcomes.
        </p>

        <h1 className='font-bold text-2xl'>Forward Propagation:</h1>

        <p className='font-serif text-lg mb-4'>
            During training, data is fed into the network, and its predictions are compared to the true values. Any disparities between the predictions and the actual outcomes are quantified using a loss function.
        </p>

        <h1 className='font-bold text-2xl'>Backpropagation:</h1>

        <p className='font-serif text-lg mb-4'>
            The network then adjusts its parameters (weights and biases) to minimize the loss. This adjustment is performed through a process called backpropagation, which involves calculating the gradients of the loss function with respect to each parameter and updating the parameters in the opposite direction of the gradients.
        </p>

        <h1 className='font-bold text-2xl'>Iterative Optimization:</h1>

        <p className='font-serif text-lg mb-4'>
            This process is repeated iteratively using optimization algorithms such as gradient descent until the network's predictions closely match the true values.
        </p>

        <h1 className='font-bold text-2xl'>Key Components:</h1>

        <p className='font-serif text-lg mb-4'>
            1. <strong>Activation Functions:</strong> These functions introduce non-linearities into the network, enabling it to learn complex patterns and relationships in the data.
        </p>

        <p className='font-serif text-lg mb-4'>
            2. <strong>Weights and Biases:</strong> These parameters determine the strength of connections between neurons and are adjusted during training to optimize the network's performance.
        </p>

        <p className='font-serif text-lg mb-4'>
            3. <strong>Loss Functions:</strong> These functions quantify the difference between the network's predictions and the actual outcomes, providing feedback for the training process.
        </p>

        <h1 className='font-bold text-2xl'>Challenges and Considerations</h1>

        <p className='font-serif text-lg mb-4'>
            While neural networks have demonstrated remarkable capabilities, they are not without challenges. Overfitting, where the network learns to memorize the training data rather than generalize to unseen data, is a common issue. Techniques such as regularization and dropout are used to mitigate overfitting.
        </p>

        <p className='font-serif text-lg mb-4'>
            Additionally, neural networks require large amounts of labeled data for training, and designing the architecture of a neural network is as much art as it is science, often requiring experimentation and fine-tuning.
        </p>

        <h1 className='font-bold text-2xl'>Conclusion</h1>

        <p className='font-serif text-lg mb-4'>
            Neural networks are powerful computational models that have transformed numerous fields, from computer vision to natural language processing. By mimicking the structure and functioning of the human brain, these networks are capable of learning complex patterns and making accurate predictions from data. Understanding the inner workings of neural networks provides valuable insights into their capabilities and limitations, paving the way for further advancements in artificial intelligence.
        </p>
        </div>
        </>
        )
}